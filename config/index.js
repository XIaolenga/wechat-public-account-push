export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx33717b028a6096ef",
    // 公众号appSecret
    appSecret: "186cc46f2e396b6d50f3ead4a4da615d",
    // 模板消息id
    templateId: "meQIUxFhi95U5NOvdapHtXrHu0TK-P81CqdwJvHN15w",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["ocScv5tGS2L82nX3bEW7AaaenPSo"],
     
    // 信息配置
    // 所在省份
    province: "安徽",
    // 所在城市
    city: "亳州",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "思亦老婆", "year": "1998", "date": "11-23", "type": 'new'},
      {"name": "xiaoleng", "year": "1998", "date": "03-05", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-01-15",
    // 结婚纪念日
    marryDate: "未知"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
