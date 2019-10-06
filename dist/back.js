(function() {
    try{
        let entryHeader = document.querySelector('.entry-header');
        let entryContent = document.querySelector('.entry-content');
        let header = entryContent.getElementById('#upHeader');

        let clone = header.cloneNode(true);

        entryContent.removeChild(header);
        entryHeader.appendChild(clone);
    } catch(e){

    }
}());
