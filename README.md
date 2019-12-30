# Github Action for Sending Email
This is a action for sending email.

## Usage
```yaml
name: 'Send Email'

on:
  push:
    branches:
    - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: 'Send Email'
      uses: hujiulong/action-send-email@master
      with:
        # The hostname or IP address to, required
        host: 'smtp.server.com'

        # The port to connect to
        # Default: 587 if is secure is false or 465 if true
        port: 587

        # If true the connection will use TLS when connecting to server
        secure: false

        # Username, required
        username: ${{ secrets.EMAIL_USERNAME }}

        # Password, required
        password: ${{ secrets.EMAIL_PASSWORD }}

        # The subject of the email, required
        subject: 'subject'

        # The plaintext version of the message
        text: 'text content'

        # The html version of the message
        html: '<p>html content</p>'

        # The email address of the sender
        # Default: username
        from: 'Sender <sender@server.com>'

        # The email address of the receiver
        to: 'receiver@server.com'
```

## License

[MIT license](LICENSE).
