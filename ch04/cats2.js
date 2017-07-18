const catList = ["Luna","Cracker","Robin","Pig","Simba"];

function main(args) {

    let cats = catList;

    if(args.filter && args.filter !== '') {
        cats = cats.filter((cat) => {
            return (cat.indexOf(args.filter) >= 0);
        });
    }

    return {
        cats:cats
    };
    
}