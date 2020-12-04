export const AVAILABLE_TYPES = [
    {
        'anchor': 'all pages',
        'acceptor': '*'
    },
    {
        'anchor': 'home',
        'acceptor': '/home'
    },
    {
        'anchor': 'product',
        'acceptor': '/product'
    },
    {
        'anchor': 'password',
        'acceptor': '/password'
    },
    {
        'anchor': 'custom',
        'acceptor': 'custom'
    }
];

export const RULES_TYPE_INCLUSION = 'inclusion';
export const RULES_TYPE_EXCLUSION = 'exclusion';

export const RULE_TYPE_PAGE = 'page';
export const RULE_TYPE_CUSTOM = 'custom';

export const RULE_SECTION_INCLUSION = 'inclusion';
export const RULE_SECTION_EXCLUSION = 'exclusion';
export const RULES_SECTION = [
    RULE_SECTION_INCLUSION,
    RULE_SECTION_EXCLUSION
];

export const RULE_CUSTOM_TYPE_EXACT = 'exact';
export const RULE_CUSTOM_TYPE_CONTAINS = 'contains';
export const RULE_CUSTOM_TYPE = [
    RULE_CUSTOM_TYPE_EXACT,
    RULE_CUSTOM_TYPE_CONTAINS
];

export const DEFAULT_RULE = {
    type: RULE_TYPE_PAGE,
    name: 'All pages',
    rule: '*',
    exact: true
}

const Config = {
    apiHost: "http://localhost:3000",
    apiHttpsHost: "https://localhost:3000",
    api: {
        defaultRules: '/defaultrules.json'
    }
}

export default Config;