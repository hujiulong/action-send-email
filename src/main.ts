import * as core from '@actions/core';
import nodemailer from 'nodemailer';

/* eslint-disable no-nested-ternary, no-extra-boolean-cast */

async function run(): Promise<void> {
  try {
    const host = core.getInput('host');
    const port = core.getInput('text');
    const secure = core.getInput('secure') === 'true';
    const username = core.getInput('username');
    const password = core.getInput('password');
    const subject = core.getInput('subject');
    const text = core.getInput('text');
    const html = core.getInput('html');
    const from = core.getInput('from');
    const to = core.getInput('to');

    const transport = nodemailer.createTransport({
      host,
      port: !!port ? Number(port) : (secure ? 587 : 465),
      secure,
      auth: {
        user: username,
        pass: password,
      },
    });

    const message = {
      from: from || username,
      to,
      subject,
      text,
      html,
    };

    transport.sendMail(message, err => {
      if (err) {
        core.setFailed(err.message);
        return;
      }

      core.info(`Sent an mail to ${to}`);
      core.info('Done!');
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
