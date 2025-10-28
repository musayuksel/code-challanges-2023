// ============================================================
// CONFIGURATION - Edit these values before running
// ============================================================

// const CONFIG = {
// 	// Year range (use last 2 digits: 16 = 2016, 25 = 2025)
// 	startYear: 17,        // Start year
// 	maxYear: 25,          // End year (will scrape all years from start to max)
	
// 	// How many consecutive "not found" cases before moving to next year
// 	// Recommended: 100 for production, 10 for testing
// 	maxConsecutiveSkips: 500,
	
// 	// Starting case number (usually 1)
// 	startNumber: 1
// };
// ============================================================
// CONFIGURATION - Can be set via scraper-config.js or defaults
// ============================================================

let CONFIG;
try {
	// Try to load config from file (GitHub Actions will create this)
	CONFIG = require('./scraper-config.js');
	console.log('📋 Loaded config from scraper-config.js');
} catch {
	// Fallback to default config (for local testing)
	CONFIG = {
		startYear: 18,
		maxYear: 18,
		maxConsecutiveSkips: 500,
		startNumber: 46033
	};
	console.log('📋 Using default config');
}

// ============================================================
// DO NOT EDIT BELOW THIS LINE
// ============================================================

const { scrapeECHRApplication } = require('./improved-scraper');
const { D1Adapter } = require('./d1-adapter');
const { log } = require('./debug');

/**
 * Monthly bulk scraper with year progression and skip logic
 */
class MonthlyECHRScraper {
	constructor(config = {}) {
		this.d1 = new D1Adapter('echr-db');
		
		// Configuration
		this.startYear = config.startYear || 16;
		this.maxYear = config.maxYear || 26;
		this.maxConsecutiveSkips = config.maxConsecutiveSkips || 100;
		this.startNumber = config.startNumber || 1;
		
		// Stats
		this.stats = {
			found: 0,
			notFound: 0,
			errors: 0,
			totalChecked: 0
		};
	}

	/**
	 * Main scraping loop
	 */
	async run() {
		log('\n🚀 Starting ECHR Monthly Scraper', true);
		log('='.repeat(60), true);
		log(`Year range: ${this.startYear} to ${this.maxYear}`, true);
		log(`Max consecutive skips: ${this.maxConsecutiveSkips}`, true);
		log('='.repeat(60), true);

		let currentYear = this.startYear;
		let currentNumber = this.startNumber;

		while (currentYear <= this.maxYear) {
			let consecutiveSkips = 0;

			log(`\n📅 Processing year: 20${currentYear}`, true);
			log('-'.repeat(60), true);

			while (consecutiveSkips < this.maxConsecutiveSkips) {
				this.stats.totalChecked++;
				log(`\n[Check #${this.stats.totalChecked}] ${currentNumber}/${currentYear}`);

				try {
					// Scrape the case
					const data = await scrapeECHRApplication(currentNumber, currentYear);

					if (data) {
						// Found - save to D1
						const saved = await this.d1.saveApplication(data);
						if (saved) {
							this.stats.found++;
							consecutiveSkips = 0; // Reset counter
						} else {
							this.stats.errors++;
						}
					} else {
						// Not found - increment skip counter
						consecutiveSkips++;
						this.stats.notFound++;
						log(`   ⚠️  Consecutive skips: ${consecutiveSkips}/${this.maxConsecutiveSkips}`, true);
					}

				} catch (error) {
					log(`   ❌ Error: ${error.message}`, true);
					this.stats.errors++;
					consecutiveSkips++;
				}

				currentNumber++;

				// Rate limiting
				await this.sleep(400);

				// Progress update every 25 cases
				if (this.stats.totalChecked % 25 === 0) {
					this.printProgress();
				}
			}

			// Move to next year
			log(`\n⏭️  Max consecutive skips reached for year ${currentYear}`, true);
			log(`   Moving to next year...\n`, true);
			
			currentYear++;
			currentNumber = 1; // Reset to 1 for new year
		}

		this.printFinalStats();
	}

	/**
	 * Print progress update
	 */
	printProgress() {
		log(`\n ${'='.repeat(60)}`, true);
		log('📊 PROGRESS UPDATE', true);
		log('='.repeat(60), true);
		log(`Total checked: ${this.stats.totalChecked}`, true);
		log(`✅ Found: ${this.stats.found}`, true);
		log(`❌ Not found: ${this.stats.notFound}`, true);
		log(`⚠️  Errors: ${this.stats.errors}`, true);
		log(`${'='.repeat(60) + '\n'}`, true);
	}

	/**
	 * Print final statistics
	 */
	printFinalStats() {
		const successRate = this.stats.totalChecked > 0 
			? ((this.stats.found / this.stats.totalChecked) * 100).toFixed(2) 
			: 0;

		log(`\n${'='.repeat(60)}`, true);
		log('🎉 SCRAPING COMPLETE', true);
		log(`${'='.repeat(60)}`, true);
		log(`Total checked: ${this.stats.totalChecked}`, true);
		log(`✅ Found: ${this.stats.found}`, true);
		log(`❌ Not found: ${this.stats.notFound}`, true);
		log(`⚠️  Errors: ${this.stats.errors}`, true);
		log(`📈 Success rate: ${successRate}%`, true);
		log(`${'='.repeat(60) + '\n'}`, true);
	}

	/**
	 * Sleep helper
	 */
	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
}

async function main() {
	log('\n📋 Configuration:', true);
	log(`   Years: 20${CONFIG.startYear} to 20${CONFIG.maxYear}`, true);
	log(`   Max skips: ${CONFIG.maxConsecutiveSkips}`, true);
	log(`   Starting from case: ${CONFIG.startNumber}`, true);
	log('\n⚠️  Press Ctrl+C to stop at any time\n', true);

	// Wait 10 seconds so user can review config
	await new Promise(resolve => setTimeout(resolve, 10000));
	
	const scraper = new MonthlyECHRScraper(CONFIG);
	await scraper.run();
}

main().catch(console.error);