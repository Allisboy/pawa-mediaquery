# pawa mediaquery for mediaquery in pawa js
# script
```javascript
    import {useMediaQuery} from 'pawa-mediaquery'
    import {useInsert} from 'pawajs'
    const Compo=()=>{
        const sm=useMediaQuery('(max-width:678px)')
        return`
        <div>
            <h1 if="sm.value">Small screen</h1>
        </div>
        `
    }
```

# html
```html
    <div id="app" class="pawa-loader">
        <h1 if="sm.value"">small screen</h1>
    </div>
```

# Note $media-max or $media-min works on element not for component