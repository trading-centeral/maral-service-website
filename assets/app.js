document.querySelectorAll('[data-event]').forEach(el=>el.addEventListener('click',()=>{try{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:el.dataset.event})}catch(e){}}));

const f=document.querySelector('#repairForm');
if(f)f.addEventListener('submit',e=>{
 e.preventDefault();
 const data=new FormData(f);
 const name=(data.get('name')||'').trim();
 const phone=(data.get('phone')||'').trim();
 const device=(data.get('device')||'').trim();
 const problem=(data.get('problem')||'').trim();
 const msg=[
  'سلام، درخواست تعمیر از سایت مارال سرویس',
  'نام: '+name,
  'شماره تماس: '+phone,
  'دستگاه: '+device,
  'شرح مشکل: '+(problem||'توضیحی ثبت نشده')
 ].join('\n');
 const url='https://wa.me/989301232448?text='+encodeURIComponent(msg);
 const status=document.querySelector('#formMsg');
 if(status)status.textContent='در حال باز کردن واتساپ برای ارسال درخواست...';
 window.open(url,'_blank','noopener,noreferrer');
});