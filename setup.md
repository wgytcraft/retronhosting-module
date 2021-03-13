# retronhosting for wgytcraft setup
## install it
in your modules.json moduleList array add the following
```json
		"gh://wgytcraft/retronhosting"
```
## config example
in your modules.json websiteData add the following
```json
	"subdomain.domain.topleveldomain":{
      "module":"wgytcraft/hello-world-template",
      "config":{
        "pagedir":"/home/runner/hosting/pages/",
        "404":"/home/runner/hosting/pages/404.html"
      }
    },
```