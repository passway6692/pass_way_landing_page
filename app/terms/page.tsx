export const metadata = {
  title: "الشروط والأحكام | Pass Way",
  description: "شروط استخدام تطبيق باس واي - مشاوير يومية بسعر ثابت في مصر",
};

export default function TermsPage() {
  return (
    <div
      className="container mx-auto px-4 py-16 max-w-4xl text-right"
      dir="rtl"
    >
      <h1 className="text-4xl font-bold mb-8">الشروط والأحكام</h1>
      <p className="text-lg mb-6">آخر تحديث: 24 نوفمبر 2025</p>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>باستخدامك تطبيق Pass Way فأنت توافق على الشروط التالية...</p>
        <p>– الحجز يلغى تلقائيًا إذا لم يتم الدفع خلال 60 دقيقة</p>
        <p>– إلغاء مجاني قبل الرحلة بـ 8 ساعات</p>
        <p>– يحق للشركة إلغاء أي حساب يخالف القواعد</p>
      </div>
    </div>
  );
}
