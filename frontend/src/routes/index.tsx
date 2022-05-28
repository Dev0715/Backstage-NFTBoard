import PageError from "../views/pages/404Error";

// import Profile from "../views/pages/author/profile";
import PageSignin from "../views/pages/signin";
import Connect from "../views/pages/connect";
import Profile from "../views/pages/profile";
import Item from "../views/pages/item";
import Setting_Profile from "../views/pages/setting_profile";
import PageSignup from "../views/pages/signup";
import Collected from "../views/pages/collected";
import Connected from "../views/pages/connected";
import Reset from "../views/pages/reset";
import Verify_Email from "../views/pages/verify_email";
import ConnectedItem from "../views/pages/item/connecteditem";
import RecentlyReceived from "../views/pages/recently";
import Feed from "../views/pages/feed";
import SharedItem from "../views/pages/item/shareditem";

const routes = [
    {
        path: '/',
        element: <Collected />
    },
    {
        path: '/feed',
        element: <Feed />
    },
    {
        path: '/connected',
        element: <Connected />
    },
    {
        path: '/recently_received',
        element: <RecentlyReceived />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/connect',
        element: <Connect />
    },
    {
        path: '/nft/item/:id',
        element: <Item />
    },
    {
        path: '/nft/shareditem/:id',
        element: <SharedItem />
    },
    {
        path: '/nft/connecteditem',
        element: <ConnectedItem />
    },
    {
        path: '/setting-profile',
        element: <Setting_Profile />
    },
    {
        path: '/signin',
        element: <PageSignin />
    },
    {
        path: '/reset',
        element: <Reset />
    },
    {
        path: '/signup',
        element: <PageSignup />
    },
    {
        path: '/verify-email',
        element: <Verify_Email />
    },
    {
        path: '*',
        element: <PageError />,
    },


]

export default routes;