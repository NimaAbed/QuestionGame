const questions=[{
    question:"پابتخت ایران؟",
    imAnswer:["مشهد","شیراز","تبریز"],
    answer:"تهران"
},{
    question:"دومین شهر پر جمعبت ایران",
    imAnswer:["تبریز","مازندران","اصفهان"],
    answer:"مشهد"
},{
    question:"اسم شخصیت اصلی کتاب کتابخانه نیمه شب",
    imAnswer:["اش","خانم الم","جودی"],
    answer:"نورا"
},{
    question:" تعداد اعضای شورای نگهبان؟",
    imAnswer:["سیزده نفر","هشت نفر","شش نفر"],
    answer:"دوازده نفر"
},{
    question:"ارتفاعات سهند در کدام استان قرار دارد؟",
    imAnswer:["آذربایجان غربی","کردستان","زنجان"],
    answer:"آذربایجان شرقی",
},{
    question:"خرمشهر در کدام عملیات آزاد شد؟",
    imAnswer:["ثامن الائمه","فتح المبین","خیبر"],
    answer:"بیت المقدس",
},{
    question:"کدام درخت نماد صلح است؟",
    imAnswer:["سرو","سیب","نارنج"],
    answer:"زیتون"
},{
    question:" گیوتین اختراع کدام کشور است؟",
    imAnswer:["هندوستان","کره شمالی","ترکیه"],
    answer:"فرانسه"
},{
    question:" تجزیه ظروف پلاستیکی چند سال طول می‌کشد؟",
    imAnswer:["50 سال","5 هزار سال","50 هزار سال"],
    answer:"500 سال"
},{
    question:" آقای گل ملی جهان کیست؟",
    imAnswer:["مارادونا","لیونل مسی","علی دایی"],
    answer:"کریس رونالدو"
},{
    question:"کدام کارگردان رکورد دار دریافت سیمرغ بهترین فیلم و کارگردانی در جشنواره فیلم فجر است؟",
    imAnswer:["مجید مجیدی","اصغر فرهادی","داریوش مهرجویی"],
    answer:"ابراهیم حاتمی کیا"
}]
const divQuestion=document.querySelector(".question")
const divAnswer=document.querySelectorAll(".answer")
const divScore=document.querySelector(".score span")
const divTimer = document.querySelector(".timer span")
const h1=document.querySelector(".h1")
let question = ""
let i = 0
let timer=120
let score=0
let numberQuestion=""
divTimer.innerHTML=timer
divScore.innerHTML=score