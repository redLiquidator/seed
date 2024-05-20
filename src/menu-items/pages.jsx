// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DollarOutlined, LoginOutlined, PhoneOutlined, RocketOutlined } from '@ant-design/icons';

// icons
const icons = { DollarOutlined, LoginOutlined, PhoneOutlined, RocketOutlined };

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages = {
  id: 'group-pages',
  title: <FormattedMessage id="pages" />,
  type: 'group',
  children: [
    {
      id: 'maintenance',
      title: <FormattedMessage id="maintenance" />,
      type: 'collapse',
      icon: icons.RocketOutlined,
      isDropdown: true,
      children: [
        {
          id: 'error-404',
          title: <FormattedMessage id="error-404" />,
          type: 'item',
          url: '/maintenance/404',
          target: true
        },
        {
          id: 'error-500',
          title: <FormattedMessage id="error-500" />,
          type: 'item',
          url: '/maintenance/500',
          target: true
        },
        {
          id: 'coming-soon',
          title: <FormattedMessage id="coming-soon" />,
          type: 'item',
          url: '/maintenance/coming-soon',
          target: true
        },
        {
          id: 'under-construction',
          title: <FormattedMessage id="under-construction" />,
          type: 'item',
          url: '/maintenance/under-construction',
          target: true
        }
      ]
    },
    {
      id: 'contact-us',
      title: <FormattedMessage id="contact-us" />,
      type: 'item',
      url: '/contact-us',
      icon: icons.PhoneOutlined,
      target: true
    },
    {
      id: 'sample-page2',
      title: 'sample-page2',
      type: 'collapse',
      icon: icons.RocketOutlined,
      children: [
        {
          id: 'counting',
          title: 'Counting',
          type: 'item',
          url: '/sample-page2/counting',
          target: true
        },
        {
          id: 'two',
          title: <FormattedMessage id="two" />,
          type: 'item',
          url: '/sample-page2/two',
          target: true
        },
        {
          id: 'three',
          title: <FormattedMessage id="three" />,
          type: 'item',
          url: '/sample-page2/three',
          target: true
        }
      ]
    }
  ]
};

export default pages;
