/*
Returns the area of rectangle.
*/

function main(args) {

    if(!args.width) {
        return {
            error:"Width argument required."
        }
    }

    if(!args.height) {
        return {
            error:"Height argument required."
        }
    }

    let area = args.width * args.height;

    return { area: area };
}