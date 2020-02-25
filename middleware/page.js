export default function (context) {
  //checks if a requested page exists
  const pages = require("~/assets/pages.json");
  const page = pages.filter(page => page.name === context.route.params.id);
  if (page.length <= 0) {
    context.redirect('/products');
  }
}
