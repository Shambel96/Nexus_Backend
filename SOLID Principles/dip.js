// High-level classes shouldn’t depend on low-level classes

/* class SmsService {
  send(message) {
    console.log("Sending SMS");
  }
}
class NotificationService {
  constructor() {
    this.emailService = new EmailService();
    this.smsService = new SmsService();
    // this.whatsappService = new this.whatsappService()
  }

  notifyviaEmail(message) {
    this.emailService.send(message);
  }

  notifyviaSMS(message) {
    this.smsService.send(message);
  }
}
*/
// Interface / absraction
class NotificationChannel {
  send(message) {
    throw new Error("Implement it");
  }
}

class SmsService extends NotificationChannel {
  send(message) {
    console.log("Sending SMS");
  }
}

class EmailService extends NotificationChannel {
  send(message) {
    console.log("Sending Email");
  }
}

class WhatappService extends NotificationChannel {
  send(message) {
    console.log("Sending via Whatsapp");
  }
}

class NotificationService {
  constructor(notificationChannel) {
    this.notification = notificationChannel;
  }

  notify(message) {
    this.notification.send(message);
  }
}

const smsNotifier = new NotificationService(new SmsService());
smsNotifier.notify("Hello"); // Output: Sending SMS

const whatappNotifier = new NotificationService(new WhatappService());
whatappNotifier.notify("Hello"); // Output: Sending via Whatsapp
