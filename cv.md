# Curriculum vitae

## Personal inforamtion

**Name** Abrasov Sergei

**Age** 27

**Location** Moscow

### Contacts

**Telegram** [@myRandomize](https://t.me/myRandomize)

**Email** abrasov.dev@gmail.com

## My goals
- to become a qualified front-end developer
- to learn and improve new hard\soft-skills
- get more experience in development

## My skills
- html, css, scss
- native javascript
- bem
- git

## Code example
```
function generatePassword(length) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,!@#$%^&*()-+/_?='
  let password = ''
  for (let i = 0; i < length; i++) {
    let randomSign = Math.floor(Math.random() * charset.length)
    password += charset[randomSign]
  }
  return password
}
```