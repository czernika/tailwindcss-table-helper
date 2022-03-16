# TailwindCSS Table Helper

Add extra components to work with tables like `table-responsive` and some others

## Why

While working with tables I realized I used same styles for tables again and again. Why not just keep it simple with utilities like `table-responsive`? So that is why I created this simple package

I have no goal to create UI-component but a component which works in a way it should - responsive table should be responsive, stripped - stripped, sticky tables must have sticky header. The styling are up to you.

## Installation

Install it with

```
npm i tailwindcss-table-helper
```

Next you need to require plugin within `plugin` section of configuration file

```js
// tailwind.config.js

module.exports = {
    //...
    plugins: [
        require('tailwindcss-table-helper'),
    ]
}
```

## Components

Every component works with media variants like `sm:`, `md:` etc. So you may disable any component on any screen you wish

### table-responsive (table-not-responsive)

Based on [this article](https://css-tricks.com/responsive-data-tables/) about how to make your tables looks good on mobile devices

This table will collapse on mobile devices but after 640px it will be usual table. The only thing it changes - the outlook (display) value of table. Other decorative elements like paddings, colors etc are out of scope of this package but ypu still have control over it as regular. The reason behind it is to left you as mich maneuver for styling as you need

Every responsive cell requires `data-head` attribute to be present 

```html
<table class="table-responsive sm:table-not-responsive">
    <thead class="bg-white">
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-head="Product" class="text-right sm:text-left">Notebook Some Model XZ-1000i</td>
            <td data-head="Price" class="text-right sm:text-left">1000 $</td>
            <td data-head="Amount" class="text-right sm:text-left">2</td>
            <td data-head="Total" class="text-right sm:text-left">2000 $</td>
        </tr>
        <tr>
            <td data-head="Product" class="text-right sm:text-left">Crazy Looking Shoes "Walk Like a God"</td>
            <td data-head="Price" class="text-right sm:text-left">19999 $</td>
            <td data-head="Amount" class="text-right sm:text-left">1</td>
            <td data-head="Total" class="text-right sm:text-left">19999 $</td>
        </tr>
        <tr>
            <td data-head="Product" class="text-right sm:text-left">Apple (Fruit)</td>
            <td data-head="Price" class="text-right sm:text-left">5 $</td>
            <td data-head="Amount" class="text-right sm:text-left">10</td>
            <td data-head="Total" class="text-right sm:text-left">50 $</td>
        </tr>
    </tbody>
</table>
```

### table-sticky (table-not-sticky)

Sticks table `thead` at the top while scrolling. May be useful for large tables 

```html
<table class="table-sticky sm:table-not-sticky">
    <thead>
        ...
    </thead>
</table>
```

Configure heading style on collapsed table with CSS-in-JS syntax within `tableHelper.heading` section

```js
// tailwind.config.js

module.exports = {
    theme: {
        tableHelper: {
            heading: {
                textTransform: 'uppercase',
                'font-weight': 700,
            }
        }
    },
    plugins: [
        require('tailwindcss-table-helper'),
    ]
}
```

If you want change `data-head` attribute change heading with `content` property

> Under-the-hood it is simply `::before` pseudo-element

```js
// tailwind.config.js

module.exports = {
    theme: {
        tableHelper: {
            heading: {
                content: attr(data-label)
            }
        }
    },
    plugins: [
        require('tailwindcss-table-helper'),
    ]
}
```

Now you may use `data-label` instead of `data-head`

### table-stripped-odd / table-stripped-even (table-not-stripped)

Colorize odd or even rows of the table. Color maybe configured

```html
<table class="table-stripped-odd sm:table-not-stripped">
    <thead>
        ...
    </thead>
</table>
```

```js
// tailwind.config.js

module.exports = {
    theme: {
        tableHelper: {
            rows: {
                // every single row will be white with `table-not-stripped`. Default is `inherit` (parent color)
                DEFAULT: 'white',

                // every odd row will be red with `table-stripped-odd`. Default is `bg-gray-100` 
                odd: 'red',

                // every odd row will be blue with `table-stripped-even`. Default is `bg-gray-100`
                even: 'blue',
            }
        }
    },
    plugins: [
        require('tailwindcss-table-helper'),
    ]
}
```

### table-scrollable (table-not-scrollable)

Add horizontal scroll for extra-wide tables 

```html
<table class="table-scrollable sm:table-not-scrollable">
    <thead>
        ...
    </thead>
</table>
```

## License

Runs under MIT [license](https://github.com/czernika/tailwindcss-table-helper/blob/master/LICENSE.md)

## TODO (or maybe)

- `table-stripped-odd-[color]` while keeping `table-stripped-odd` as default. Already have working example with JIT but not with Tailwind pallette like `table-stripped-odd-amber-300`
- Maybe create `table-stylish` or `table-ui`. Same styles as for table for official [typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin to keep it consistent or any good UI example