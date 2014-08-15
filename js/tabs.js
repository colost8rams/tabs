// JavaScript tabs. Written by P Cope.

var displayTab = function() {

    // Return if the tab is already selected.
    if (this.getAttribute('id') === 'selectedTabHeading') { return; }

    // Remove selected id from the currently selected tab heading and content div.
    document.getElementById('selectedTabHeading').removeAttribute('id');
    document.getElementById('selectedTabContent').removeAttribute('id');

    // Add selected ids to the clicked tab heading and content div.
    this.setAttribute('id', 'selectedTabHeading');
    document.getElementById('tabContents').children[domUtils.findTypeIndex(this)].setAttribute('id', 'selectedTabContent');
};

var tabHeadings = document.querySelectorAll('#contentContainer .blockLinks > li');

for (var i = 0, len = tabHeadings.length; i < len; i++) {
    tabHeadings[i].addEventListener('click', displayTab, false);
}
