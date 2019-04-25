import {chain, keys, map} from 'lodash';

declare let gtag: (action, id, value) => {};

export function googleAnalyticsHeadScripts() {
    const head = document.getElementsByTagName('head')[0];

    const googleAnalyticsFirstScript = document.createElement('script');
    googleAnalyticsFirstScript.async = true;
    googleAnalyticsFirstScript.src = 'https://www.googletagmanager.com/gtag/js?id=UA-137973739-1';

    const googleAnalyticsSecondScript = document.createElement('script');
    googleAnalyticsSecondScript.innerHTML = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-137973739-1');`;

    head.insertBefore(googleAnalyticsSecondScript, head.firstChild);
    head.insertBefore(googleAnalyticsFirstScript, head.firstChild);
}

export function googleAnalytics(url) {

    const eventDetails = {
        user_id: 'valami',
        page_to: url
    };

    const dimensions = chain(eventDetails)
        .keys()
        .map((key, index) => ['dimension' + (index + 1), key])
        .fromPairs()
        .value();

    gtag('config', 'UA-137973739-1', {
        custom_map: dimensions
    });

    console.log(dimensions);
    gtag('event', 'page_change', eventDetails);
}

/* export function googleAnalyticsEvent(eventAction, eventDetails) {
    const dimension = chain(eventDetails)
        .keys()
        .map((key, index) => ['dimension' + index, key])
        .fromPairs()
        .value();

    console.log(dimension);

    gtag('config', 'UA-137973739-1', {
        custom_map: dimension
    });

    gtag('event', eventAction, eventDetails);
}*/
