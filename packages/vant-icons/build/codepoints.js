/* eslint-disable no-useless-escape */
const map = {
  F000: 'add-o',
  F001: 'add-square',
  F002: 'add',
  F003: 'after-sale',
  F004: 'aim',
  F005: 'alipay',
  F006: 'apps-o',
  F007: 'arrow-down',
  F008: 'arrow-left',
  F009: 'arrow-up',
  F00A: 'arrow',
  F00B: 'ascending',
  F00C: 'audio',
  F00D: 'award-o',
  F00E: 'award',
  F00F: 'bag-o',
  F010: 'bag',
  F011: 'balance-list-o',
  F012: 'balance-list',
  F013: 'balance-o',
  F014: 'balance-pay',
  F015: 'bar-chart-o',
  F016: 'bars',
  F017: 'bell',
  F018: 'bill-o',
  F019: 'bill',
  F01A: 'birthday-cake-o',
  F01B: 'bookmark-o',
  F01C: 'bookmark',
  F01D: 'browsing-history-o',
  F01E: 'browsing-history',
  F01F: 'brush-o',
  F020: 'bulb-o',
  F021: 'bullhorn-o',
  F022: 'calender-o',
  F023: 'card',
  F024: 'cart-circle-o',
  F025: 'cart-circle',
  F026: 'cart-o',
  F027: 'cart',
  F028: 'cash-back-record',
  F029: 'cash-on-deliver',
  F02A: 'cashier-o',
  F02B: 'certificate',
  F02C: 'chart-trending-o',
  F02D: 'chat-o',
  F02E: 'chat',
  F02F: 'checked',
  F030: 'circle',
  F031: 'clear',
  F032: 'clock-o',
  F033: 'clock',
  F034: 'close',
  F035: 'closed-eye',
  F036: 'cluster-o',
  F037: 'cluster',
  F038: 'column',
  F039: 'comment-circle-o',
  F03A: 'comment-circle',
  F03B: 'comment-o',
  F03C: 'comment',
  F03D: 'completed',
  F03E: 'contact',
  F03F: 'coupon-o',
  F040: 'coupon',
  F041: 'credit-pay',
  F042: 'cross',
  F043: 'debit-pay',
  F044: 'delete',
  F045: 'descending',
  F046: 'description',
  F047: 'desktop-o',
  F048: 'diamond-o',
  F049: 'diamond',
  F04A: 'discount',
  F04B: 'down',
  F04C: 'ecard-pay',
  F04D: 'edit',
  F04E: 'ellipsis',
  F04F: 'empty',
  F050: 'envelop-o',
  F051: 'exchange',
  F052: 'expand-o',
  F053: 'expand',
  F054: 'eye-o',
  F055: 'eye',
  F056: 'fail',
  F057: 'failure',
  F058: 'filter-o',
  F059: 'fire-o',
  F05A: 'fire',
  F05B: 'flag-o',
  F05C: 'flower-o',
  F05D: 'free-postage',
  F05E: 'friends-o',
  F05F: 'friends',
  F060: 'gem-o',
  F061: 'gem',
  F062: 'gift-card-o',
  F063: 'gift-card',
  F064: 'gift-o',
  F065: 'gift',
  F066: 'gold-coin-o',
  F067: 'gold-coin',
  F068: 'good-job-o',
  F069: 'good-job',
  F06A: 'goods-collect-o',
  F06B: 'goods-collect',
  F06C: 'graphic',
  F06D: 'home-o',
  F06E: 'hot-o',
  F06F: 'hot-sale-o',
  F070: 'hot-sale',
  F071: 'hot',
  F072: 'hotel-o',
  F073: 'idcard',
  F074: 'info-o',
  F075: 'info',
  F076: 'invition',
  F077: 'label-o',
  F078: 'label',
  F079: 'like-o',
  F07A: 'like',
  F07B: 'live',
  F07C: 'location-o',
  F07D: 'location',
  F07E: 'lock',
  F07F: 'logistics',
  F080: 'manager-o',
  F081: 'manager',
  F082: 'map-marked',
  F083: 'medal-o',
  F084: 'medal',
  F085: 'more-o',
  F086: 'more',
  F087: 'music-o',
  F088: 'music',
  F089: 'new-arrival-o',
  F08A: 'new-arrival',
  F08B: 'new-o',
  F08C: 'new',
  F08D: 'newspaper-o',
  F08E: 'notes-o',
  F08F: 'orders-o',
  F090: 'other-pay',
  F091: 'paid',
  F092: 'passed',
  F093: 'pause-circle-o',
  F094: 'pause-circle',
  F095: 'pause',
  F096: 'peer-pay',
  F097: 'pending-payment',
  F098: 'phone-circle-o',
  F099: 'phone-circle',
  F09A: 'phone-o',
  F09B: 'phone',
  F09C: 'photo-o',
  F09D: 'photo',
  F09E: 'photograph',
  F09F: 'play-circle-o',
  F0A0: 'play-circle',
  F0A1: 'play',
  F0A2: 'plus',
  F0A3: 'point-gift-o',
  F0A4: 'point-gift',
  F0A5: 'points',
  F0A6: 'printer',
  F0A7: 'qr-invalid',
  F0A8: 'qr',
  F0A9: 'question-o',
  F0AA: 'question',
  F0AB: 'records',
  F0AC: 'refund-o',
  F0AD: 'replay',
  F0AE: 'scan',
  F0AF: 'search',
  F0B0: 'send-gift-o',
  F0B1: 'send-gift',
  F0B2: 'service-o',
  F0B3: 'service',
  F0B4: 'setting-o',
  F0B5: 'setting',
  F0B6: 'share',
  F0B7: 'shop-collect-o',
  F0B8: 'shop-collect',
  F0B9: 'shop-o',
  F0BA: 'shop',
  F0BB: 'shopping-cart-o',
  F0BC: 'shopping-cart',
  F0BD: 'shrink',
  F0BE: 'sign',
  F0BF: 'smile-comment-o',
  F0C0: 'smile-comment',
  F0C1: 'smile-o',
  F0C2: 'smile',
  F0C3: 'star-o',
  F0C4: 'star',
  F0C5: 'stop-circle-o',
  F0C6: 'stop-circle',
  F0C7: 'stop',
  F0C8: 'success',
  F0C9: 'thumb-circle-o',
  F0CA: 'thumb-circle',
  F0CB: 'todo-list-o',
  F0CC: 'todo-list',
  F0CD: 'tosend',
  F0CE: 'tv-o',
  F0CF: 'umbrella-circle',
  F0D0: 'underway-o',
  F0D1: 'underway',
  F0D2: 'upgrade',
  F0D3: 'user-circle-o',
  F0D4: 'user-o',
  F0D5: 'video-o',
  F0D6: 'video',
  F0D7: 'vip-card-o',
  F0D8: 'vip-card',
  F0D9: 'volume-o',
  F0DA: 'volume',
  F0DB: 'wap-home-o',
  F0DC: 'wap-home',
  F0DD: 'wap-nav',
  F0DE: 'warn-o',
  F0DF: 'warning-o',
  F0E0: 'warning',
  F0E1: 'weapp-nav',
  F0E2: 'wechat',
  F0E3: 'youzan-shield',
};

const reversedMap = {};

Object.keys(map).forEach((key) => {
  reversedMap[map[key]] = key;
});

module.exports = reversedMap;
