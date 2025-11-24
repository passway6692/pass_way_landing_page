export const metadata = {
  title: "سياسة الخصوصية | Pass Way",
  description: "سياسة خصوصية تطبيق باس واي - حجز مشاوير يومية مشتركة في مصر",
};

export default function PrivacyPage() {
  return (
    <div
      className="container mx-auto px-4 py-16 max-w-4xl text-right"
      dir="rtl"
    >
      <h1 className="text-4xl font-bold mb-8">سياسة الخصوصية</h1>
      <p className="text-lg mb-6">آخر تحديث: 24 نوفمبر 2025</p>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>في Pass Way نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية...</p>
        <p>
          نقوم بجمع: الاسم، رقم التليفون، الموقع، بيانات الرحلات فقط لتقديم
          الخدمة.
        </p>
        <p>لا نبيع بياناتك لأي طرف ثالث.</p>
        <p>للتواصل: support@passwayegy.com</p>
      </div>
    </div>
  );
}
