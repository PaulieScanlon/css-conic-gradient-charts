# CSS conic-gradient Charts

Create Donut or Pie Charts using the CSS [conic-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient)

## Principle

Learn the principle behind this approach from [Shruti Balasa](https://twitter.com/shrutibalasa/status/1612785019159982080?s=20&t=6TLkMmRjOFQxKP7W-jFPcA).

## Dynamic

The above example works if you know the values upfront and hardcode the color stops using E.g. `pink 0deg 90deg yellow 90deg 180deg` etc. However, in most cases the data will be dynamic. The examples in this repo create a `css_string` suitable for use with `conic-gradient()` from dynamic data values.

### css_string

```javascript
const data = [
  {
    name: 'Cluster 1',
    value: 450,
  },
  {
    name: 'Cluster 2',
    value: 230,
  },
  {
    name: 'Cluster 3',
    value: 180,
  },
  {
    name: 'Cluster 4',
    value: 260,
  },
  {
    name: 'Cluster 5',
    value: 60,
  },
];

const total_value = data.reduce((a, b) => a + b.value, 0);
const percent = (num) => Math.round((num / total_value) * 100);
const degrees = (percent) => Math.round((percent / 100) * 360);

const css_string = data
  .map((_, index, array) => {
    const start_value = array[index - 1]?.value ? array[index - 1].value : 0;
    const end_value = (array[index].value += array[index - 1]?.value ? array[index - 1].value : 0);

    const start_degrees = degrees(percent(start_value));
    const end_degrees = degrees(percent(end_value));

    return ` var(--color-violet-${(index + 1) * 100}) ${start_degrees}deg ${end_degrees}deg`;
  })
  .join();
```

### Example Output

```shell
var(--color-violet-500) 0deg 36deg,
var(--color-violet-400) 36deg 94deg,
var(--color-violet-300) 94deg 166deg,
var(--color-violet-200) 166deg 259deg,
var(--color-violet-100) 259deg 360deg
```

### Usage

```javascript
<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' className='rounded-full'>
  <foreignObject x='0' y='0' width='100' height='100'>
    <div
      xmlns='http://www.w3.org/1999/xhtml'
      className='w-full h-full'
      style={{
        background: `conic-gradient(${css_string})`,
      }}
    />
  </foreignObject>
</svg>
```

#### CSS

CSS class names are from [TailwindCSS](https://tailwindcss.com/docs/customizing-colors)
