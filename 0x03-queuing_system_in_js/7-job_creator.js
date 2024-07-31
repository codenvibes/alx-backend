import { createQueue } from 'kue';

/**
 * Represents a notification job.
 * @typedef {Object} Job
 * @property {string} phoneNumber - The phone number to receive the notification.
 * @property {string} message - The notification message containing a verification code.
 */

/** 
 * List of notification jobs.
 * @type {Job[]}
 */
const jobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account'
  }
];

/**
 * Creates a queue for managing notification jobs.
 * @type {Queue}
 */
const queue = createQueue({ name: 'push_notification_code_2' });

/**
 * Adds jobs to the queue with event handlers for job progress and status.
 */
for (const jobInfo of jobs) {
  /**
   * Creates a notification job and adds it to the queue.
   * @type {Job}
   */
  const job = queue.create('push_notification_code_2', jobInfo);

  job
    .on('enqueue', () => {
      console.log('Notification job created:', job.id);
    })
    .on('complete', () => {
      console.log(`Notification job ${job.id} completed`);
    })
    .on('failed attempt', (error) => {
      console.log(`Notification job ${job.id} failed:`, error);
    })
    .on('progress', (progress, _data) => {
      console.log(`Notification job ${job.id} ${progress} complete`);
    });
}
