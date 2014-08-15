// Utility DOM methods. Written by P Cope.

var domUtils = {

    // Returns a child element DOM object of a specified type
    // The child element is the nth child (of its type) of the parentEl DOM object using a zero-based index.
    // The child element type is the HTML element's nodeName, eg 'td', 'div'.
    getNthChildOfType: function(parentEl, childElType, index) {
        // Candidate could be a child element or a further descendant.
        var candidate = parentEl.querySelector( childElType + ':nth-of-type(' + (index+1) +')' );
        if ((candidate !== null) && (candidate.parentElement === parentEl)) {
            return candidate;
        } else {
            return -1;
        }
    },

    // Returns the zero-based index of an element, compared with siblings of the same type, or -1 if not present.
    // For example, if a parent's child elements were 'p', 'div', 'p', 'div', 'div', the last div would be index 2 if
    // that div element node was an argument to this function.
    // Accepts a DOM element node as an arguments.
    findTypeIndex: function(el) {
        var parentEl = el.parentElement,
            childElType = el.nodeName,
            i = 0;
        // Iterate through the parentEl's child elements of the childEl's type, eg all the child divs of parentEl.
        while (true) {
            var candidateEl = this.getNthChildOfType(parentEl, childElType, i);
            if (candidateEl === el) {
                return i;
            } else if (candidateEl === -1) {
                break;
            }
            i++;
        }
        return -1;
    },

};
