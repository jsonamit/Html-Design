(function () {
  let timeout;

  function init(attempts) {
    clearTimeout(timeout)
    attempts = attempts || 1
    if (attempts > 3) return
    if (typeof CodeFundAd === 'undefined') {
      timeout = setTimeout(function () { init(attempts + 1) }, 350)
      return
    }
    new CodeFundAd({"selector":"#codefund_ad","template":"bottom-bar","theme":"light","fallback":false,"urls":{"impression":"https://codefund.io/display/6f9392f8-09b0-474f-96d5-9fed0082b21e.gif","campaign":"https://codefund.io/impressions/6f9392f8-09b0-474f-96d5-9fed0082b21e/click?campaign_id=551\u0026creative_id=425\u0026property_id=441\u0026template=bottom-bar\u0026theme=light","poweredBy":"https://codefund.io/invite/uaY8mStZDXQ","adblock":"https://cdn2.codefund.app/assets/px.js","uplift":"https://codefund.io/impressions/6f9392f8-09b0-474f-96d5-9fed0082b21e/uplift?advertiser_id=723"},"creative":{"name":"v1","headline":"Try Buildkite!","body":"Fast, secure, and scalable CI/CD for all your software projects.","cta":"Get started","imageUrls":{"icon":"https://cdn2.codefund.app/L9rYKZ3WEjb7wPZDnBuSHNDL","small":"https://cdn2.codefund.app/5QDsyM7XwozxBzWFXxbafymj","large":"https://cdn2.codefund.app/LAnjyKPFSW8ivg3zNeU4rh8N","wide":"https://cdn2.codefund.app/VXA1NdX2GSzMpmvSY5afJQDQ"}}})
  }

  const codefundStylesheetId = 'codefund-style'
  const codefundScriptId = 'codefund-script'

  if (!document.getElementById(codefundStylesheetId)) {
    const stylesheet = document.createElement('link')
    stylesheet.setAttribute('id', codefundStylesheetId)
    stylesheet.setAttribute('rel', 'stylesheet')
    stylesheet.setAttribute('media', 'all')
    stylesheet.setAttribute('href', 'https://codefund.io/packs/css/code_fund_ad-671bae33.css')
    stylesheet.addEventListener('load', init)
    document.head.appendChild(stylesheet)
  }

  if (document.getElementById(codefundScriptId)) {
    init()
  } else {
    const script = document.createElement('script')
    script.setAttribute('id', codefundScriptId)
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://codefund.io/packs/js/code_fund_ad-d1ab71f2b6e935ef47c6.js')
    script.addEventListener('load', init)
    document.head.appendChild(script)
  }
})()
