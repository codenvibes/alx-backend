import { createQueue } from 'kue';

/**
 * Create a new queue instance for job processing.
 * @type {Queue}
 */
const queue = createQueue();

/**
 * Sends a notification to a specified phone number with a given message.
 * @param {string} phoneNumber - The phone number to send the notification to.
 * @param {string} message - The message to be sent in the notification.
 */
const sendNotification = (phoneNumber, message) => {
  console.log(`Sending notification to ${phoneNumber}`, 'with message:', message);
};

/**
 * Processes jobs from the queue for sending push notifications.
 * @param {string} 'push_notification_code' - The job type to process.
 * @param {Function} job - The job object containing the data to be processed.
 * @param {Function} done - A callback function to signal the job is complete.
 */
queue.process('push_notification_code', (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
});
