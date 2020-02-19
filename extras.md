## Useful links

### Material Design Icon List:
https://materialdesignicons.com/

### Vuetify Documentation:
https://vuetifyjs.com/es-MX/getting-started/quick-start

## Extra code

```javascript
formatImagesUrl() {
      this.recipes = this.recipes.map(r => {
        const buff = { ...r };
        buff.image = `https://spoonacular.com/recipeImages/${r.image
          .split("-")
          .reverse()[0]
          .replace(".jpg", "")}-556x370.jpg`;
        return buff;
      });
    }
```