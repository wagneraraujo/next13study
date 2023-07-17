
# Next13

## Plugins eslint

react-hoocks/recommended.

`` yarn add eslint-plugin-react-hooks --dev ``.

``eslint-config-prettier``.

``yarn add --dev eslint-plugin-prettier``.

`` npm install eslint-plugin-import-helpers -g ``
`` yarn add --dev  eslint-plugin-import-helpers ``

### Rules eslintrc

`` "react/react-in-jsx-scope":"off" ``.

## Route Handlers

Component por default é um server component, então podemos transaformar o component em async

`` export default async MeuComponent(){} ``

- Nome do arquivo e o mesmo dos parametros [slug] => context.params.slug
- return NextResponse.json({slug})
- Route groups (admin) ou (user) /dashboard ignora e consigo acesar uma rota diretamente


## Dicas
 - String para numerico ex: +evento.target.value