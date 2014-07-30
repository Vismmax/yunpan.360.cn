function create_observerPanel(node, func) {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            func(node.id);
        });
    });
    var config = {
        attributes: false,
        childList: true,
        characterData: false,
        subtree: true
    };
    observer.observe(node, config);
}

