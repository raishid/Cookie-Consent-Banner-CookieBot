var secctionDetails = `
    <div class="container-detail">
        <div class="detail">
            <div>
                <span class="subtitle-details">${Cookiebot.dialog.cookieHeaderTypeNecessary.replace('({0})', '')} </span>
                <span class="count-detail">${Cookiebot.dialog.cookieTableNecessary.length}</span>
            </div>
            <div>
                <label class="switch">
                    <input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonNecessary" disabled checked>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        <div class="detail">
            <div>
                <span class="subtitle-details">${Cookiebot.dialog.cookieHeaderTypePreference.replace('({0})', '')} </span>
                <span class="count-detail">${Cookiebot.dialog.cookieTablePreference.length}</span>
            </div>
            <div>
                <label class="switch">
                    <input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonPreferences" ${ Cookiebot.dialog.cookieconsent.consent.preferences && 'checked' }>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        <div class="detail">
            <div>
                <span class="subtitle-details">${Cookiebot.dialog.cookieHeaderTypeStatistics.replace('({0})', '')} </span>
                <span class="count-detail">${Cookiebot.dialog.cookieTableStatistics.length}</span>
            </div>
            <div>
                <label class="switch">
                    <input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonStatistics" ${ Cookiebot.dialog.cookieconsent.consent.statistics && 'checked' }>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        <div class="detail">
            <div>
                <span class="subtitle-details">${Cookiebot.dialog.cookieHeaderTypeAdvertising.replace('({0})', '')} </span>
                <span class="count-detail">${Cookiebot.dialog.cookieTableAdvertising.length}</span>
            </div>
            <div>
                <label class="switch">
                    <input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonMarketing" ${ Cookiebot.dialog.cookieconsent.consent.marketing && 'checked' }>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    </div>
`;

var aboutCookies = `<div class="container-about-cookie">
    <p>
        ${Cookiebot.dialog.cookieIntroText}
    </p>
</div>`;

var templateDetails = `<nav class="nav-dropdown">
        <ul>
            <li class="active" onclick="showDetails(this)">${Cookiebot.dialog.details || 'Details'}</li>
            <li onclick="showAboutCookies(this)">${Cookiebot.dialog.aboutCookiesText}</li>
        </ul>
    </nav>
    <section class="content-details">${secctionDetails}</section>
`;

function showDetails(e) {
    document.querySelector('.nav-dropdown li.active').classList.remove('active');
    e.classList.add('active');
    document.querySelector('#cookiebanner').classList.remove('active-text');
    document.querySelector("#cookiebanner .content-details").innerHTML = secctionDetails;
}

function showAboutCookies(e) {
    document.querySelector('.nav-dropdown li.active').classList.remove('active');
    e.classList.add('active');
    document.querySelector('#cookiebanner').classList.add('active-text');
    document.querySelector("#cookiebanner .content-details").innerHTML = aboutCookies;
}

function addDropdown() {
    const bt = document.querySelector('#manageCookie');
    bt.innerHTML = Cookiebot.dialog.loiAllowSelectionText;
    bt.id = 'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection';
    bt.attributes.onclick.value = 'Cookiebot.dialog.submitConsent()';
    bt.style.fontSize = '14px';
    document.querySelector("#cookiebanner .container-first").innerHTML = templateDetails;
}

console.log(Cookiebot.dialog);

var cookieBannerSliderPos = 0;

function showCookieBanner() {
    var cookiebanner = document.getElementById("cookiebanner");
    var dialogHeight = parseInt(cookiebanner.offsetHeight);
    cookiebanner.style.bottom = (cookieBannerSliderPos - dialogHeight) + "px";
    cookieBannerSliderPos += 4;
    if (cookieBannerSliderPos < dialogHeight) {
        setTimeout(function () {
            showCookieBanner();
        }, 1);
    } else {
        cookieBannerSliderPos = 0;
        cookiebanner.style.bottom = "0px";
    }
}

function hideCookieBanner() {
    var cookiebanner = document.getElementById("cookiebanner");
    cookiebanner.style.display = "none";
}
