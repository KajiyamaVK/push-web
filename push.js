var push = require('web-push')

//let vapidKey = push.generateVAPIDKeys();
let vapidKey = {
    publicKey: 'BDCGyBiStIkJOEfN1JunUrvBZUVQUCHV6y-RF4rb4RfSbrQZToXYzZ7yDwxR-zstNl_RlbrK5rUQJvj18Fy_tTA',
    privateKey: 'i_IQfP8m8c-GLy4T9pOf3Vj2-kGgI6eQLTrgPQVFGic'
}

push.setVapidDetails('victor.kajiyama@gmail.com', vapidKey.publicKey, vapidKey.privateKey)
//console.log(vapidKey);



push.sendNotification(sub, 'test message')