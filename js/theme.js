//theme.js
export let theme = {
    themeType: 'indigo-theme',
    secondaryColor: '#4ebdd4',
    coolUpdate: function() {
        let secondaryColor = localStorage.getItem('secondaryColor') || this.secondaryColor;
        let themeType = localStorage.getItem('themeType') || this.themeType;

        if (document.getElementById('edit') !== null) {
            document.getElementById('edit').style.backgroundColor = secondaryColor;
        }
        $('.content-wrapper')[0].classList.value = `content-wrapper ${themeType}`;
        document.getElementById('nav').classList.value = `nav-wrapper navbar-fixed ${themeType}`;

        $('.menu-btn')[0].childNodes.forEach(el => {
            if (el.nodeType !== 3) {
                el.style.backgroundColor = secondaryColor;
            }
        });
    }
}