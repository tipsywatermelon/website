// --- PostHog config (edit only here) ---
var POSTHOG_KEY = 'phc_ytpdppyUquJy7dhfz8wFa6nahnuy3dBboGtoEcgmhE82'; // replace with your key from posthog.com
var POSTHOG_HOST = 'https://us.i.posthog.com';

// PostHog loader (standard snippet, do not modify)
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+" (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||(window.posthog=[]));
posthog.init(POSTHOG_KEY, { api_host: POSTHOG_HOST });

// --- Custom events via delegation (covers all pages) ---
document.addEventListener('click', function(e) {
  if (!window.posthog) return;
  var cta = e.target.closest('a.sparkle-btn[href*="contact"]');
  if (cta) posthog.capture('cta_clicked', { label: cta.textContent.trim() });
});

document.addEventListener('submit', function(e) {
  if (!window.posthog) return;
  if (e.target.matches('form')) posthog.capture('contact_form_submitted');
});
