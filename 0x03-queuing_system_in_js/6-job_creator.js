import { createQueue } from 'kue';

/**
 * Create a queue for handling push notification jobs.
 * @type {Queue}
 */
const queue = createQueue({ name: 'push_notification_code' });

/**
 * Defines a job for sending a push notification.
 * @type {Job}
 */
const job = queue.create('push_notification_code', {
  phoneNumber: '4153518780',
  message: 'Account registered',
});

/**
 * Event listener for when the job is enqueued.
 * Logs the job ID when the job is added to the queue.
 */
job.on('enqueue', () => {
  console.log('Notification job created:', job.id);
});

/**
 * Event listener for when the job is completed.
 * Logs a message when the job is successfully completed.
 */
job.on('complete', () => {
  console.log('Notification job completed');
});

/**
 * Event listener for when the job fails after an attempt.
 * Logs a message when the job fails.
 */
job.on('failed attempt', () => {
  console.log('Notification job failed');
});

// Save the job to the queue
job.save();
