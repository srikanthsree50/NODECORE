const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'
sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to:'srikanthsree50@gmail.com',
    from:'srikanthsree50@gmail.com',
    subject:'this is me srikanth',
    text:'hi guys how r u'
})