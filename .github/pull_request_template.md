## Describe your changes

- I did an awesome feature.

## Issue ticket code (and/or) and link

- [Link to JIRA ticket](#https://ticket-url)

### **General**

- [ ] Types for input and output params
- [ ] No `any`, should be also added to eslint rules
- [ ] try/catch for any async function
- [ ] no magic numbers (describe it in constants)
- [ ] compare only with constants not with strings (instead of user === ‘adminʼ, better user === roles.admin)
- [ ] no ternary operator inside ternary operator (bad example: question ? first: second ? third: fourth)
- [ ] avoid similar types with duplicating by generics
- [ ] no console.log in pr
- [ ] .env file should be in .gitignore
- [ ] delete commented code if it's not part of documentation
- [ ] no links in the code, env links should be in env file (for example: server url), constant links (for example default avatar URL should be in constant file
- [ ] constants and function names should be lowercase.
- [ ] no dates format in the code (like "dd/MM/yyyyˮ), move it in global constant variable
- [ ] import rules. imports should come in a specific order: node modules, absolute path, relative path
- [ ] strings should be in the constant variable. Example: instead of ‘15 3 \* \* _ʼ, const EACH_DAY_15h_15min = ‘15 3 _ \* \*ʼ

### Frontend

- [ ] split component and logic (move logic to custom hook file)
- [ ] colors, font size, and font name should be in the theme or in the constants
- [ ] no text in the components, use i18n approach, even if you have only one language for now
- [ ] inline styles prohibited
- [ ] import should be absolute. instead of ../../../components/myComponent should be components/myComponent
