const utils = {
    naturalCompareCodes: (a, b) => {
        let ax = [], bx = [];

        a.code.replace(/(\d+)|(\D+)/g, (_, $1, $2) => { ax.push([$1 || Infinity, $2 || ""]); });
        b.code.replace(/(\d+)|(\D+)/g, (_, $1, $2) => { bx.push([$1 || Infinity, $2 || ""]); });

        while (ax.length && bx.length) {
            let an = ax.shift();
            let bn = bx.shift();
            let nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
            if (nn) return nn;
        }

        return ax.length - bx.length;
    }
};

export default utils;
