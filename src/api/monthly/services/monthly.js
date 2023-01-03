'use strict';

/**
 * monthly service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::monthly.monthly');
