import {DO_CHECKOUT, PRODUCT_CHANGED, CLEAR_CHECKOUT   } from '../actions/product-actions';

const WINE_REPOSITORY = {
    wines: [
        {
            awards: "2017 San Diego International Wine And Spirits Challenge 91 Points, 2017 California State Fair Commercial Wine Competition 87 Points, 2017 San Diego International Wine And Spirits Challenge Gold Medal, 2017 California State Fair Commercial Wine Competition Bronze Medal",
            image: {
                desktop: "wine1_desktop.png",
                mobile: "wine1_mobile.png"
            },
            name: "Murmurations 2013 Winemaker's Cuvée Red Wine California",
            origin: "California",
            price: 18,
            club_price: 10,
            intro_price: 5,
            sales_copy: "<strong class=\"opener\">A distinctive, fruit-forward Cuvée with a gold medal and 91-point score to its name.</strong> A Cuvée, or a winemaker’s signature blend, typically expresses the essence and style of a winemaker. And because his wines have consistently ranked among our member’s favorites, we asked Joe Otos, <strong>whose 90+ point wines took home 25 gold medals last year</strong>, to make one exclusively for our members. Using only the highest quality grapes from across California, Joe worked tirelessly to create this unparalleled wine. With aromas of blackberries and dark bing cherries, this perfectly structured wine has a long, unforgettable finish that left us thinking about it for days after we first tried it.  This wine won both a <strong>91-point score</strong> and <strong>gold medal<\/strong> from the <em>2017 San Diego International Wine & Spirits Challenge<\/em>!<strong> It retails for $18.<\/strong>",
            sku: "P2MRM13RWB",
            tag_line: "A remarkable 91-pt Cuvée from one of the leading minds in California wine",
            title: "Murmurations 2013 Winemaker's Cuvée Red Wine"
        },
        {
            awards: "",
            image: {
                desktop: "wine2_desktop.png",
                mobile: "wine2_mobile.png"
            },
            name: " Tulares Valley 2016 Heritage White California",
            origin: "California",
            price: 18,
            club_price: 10,
            intro_price: 5,
            sales_copy: "<strong class=\"opener\">A crisp Heritage White from a winemaking team with over 25 gold medals to their name. </strong> There are few spots more physically beautiful than California's Central Valley: rolling hills sprinkled with vineyards, small farms, and lush, verdant greenery. Cut by the crystal clear Mokelumne River, the region is ideal for making White Wines and the 2016 Tulares Valley Heritage White pays tribute to this picturesque terroir. Made by winemakers who have a combined <strong>25+ gold medals</strong> to their name, this heritage wine was made to some of the most exacting standards we’ve ever seen, using only the highest quality fruit in California. With refreshing flavors of Meyer lemon and honeydew this wine will transport you to the picturesque hills of the Central Valley with fragrant aromatics of honeysuckle and lime blossom.<strong> It retails for $17. </strong>",
            sku: "P2TVL16WWB",
            tag_line: " A crisp and refreshing white blend from California winemaking expert Joe Otos",
            title: " Tulares Valley 2016 Heritage White"
        }
    ],
};


const DEFAULT_STATE = {
    user_email: null,
    user_wines: [WINE_REPOSITORY.wines[0], WINE_REPOSITORY.wines[0], WINE_REPOSITORY.wines[0]],
    repository: WINE_REPOSITORY,
    do_checkout: false,
};

const baseReducer = (state = DEFAULT_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case PRODUCT_CHANGED: {
            return {
                ...state, user_wines: state.user_wines.map((wine, index) => {
                    if (index !== payload.slot) {
                        return wine;
                    }
                    return {...state.repository.wines[payload.newIndex]};
                })
            };
        }
            break;
        case DO_CHECKOUT: {
            return {...state, user_email: payload.email, do_checkout:true};
        }
            break;
        case CLEAR_CHECKOUT: {
            return {...state, do_checkout: false};
        }
            break;
        default:
            return state;
            break;
    }
}

export default baseReducer;
