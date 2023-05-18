const logger = require('./logger');

/**
 * Displays a CrowdFide banner as an into level log message.
 */
const showBanner = () => {
  logger.info(
    `
=====================================================================
_________                      _______________________________     
__  ____/_______________      _______  /__  ____/__(_)_____  /____ 
_  /    __  ___/  __ \\_ | /| / /  __  /__  /_   __  /_  __  /_  _ \\
/ /___  _  /   / /_/ /_ |/ |/ // /_/ / _  __/   _  / / /_/ / /  __/
\\____/  /_/    \\____/____/|__/ \\__,_/  /_/      /_/  \\__,_/  \\___/ 
                                                                   
=====================================================================
    `,
  );
};

module.exports = showBanner;
