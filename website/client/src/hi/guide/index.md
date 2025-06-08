# Repomix के साथ शुरुआत करना

<script setup>
import HomeBadges from '../../../components/HomeBadges.vue'
import YouTubeVideo from '../../../components/YouTubeVideo.vue'
import { VIDEO_IDS } from '../../../utils/videos'
</script>

Repomix एक ऐसा टूल है जो आपके पूरे रिपॉजिटरी को एक एकल, AI-फ्रेंडली फाइल में पैक करता है। यह आपके कोडबेस को ChatGPT, DeepSeek, Perplexity, Gemini, Gemma, Llama, Grok और अन्य जैसे लार्ज लैंग्वेज मॉडल (LLMs) को फीड करने में मदद करने के लिए डिज़ाइन किया गया है।

<YouTubeVideo :videoId="VIDEO_IDS.REPOMIX_DEMO" />

<HomeBadges />

[![Sponsors](https://cdn.jsdelivr.net/gh/yamadashy/sponsor-list/sponsors/sponsors.png)](https://github.com/sponsors/yamadashy)

## त्वरित शुरुआत

अपने प्रोजेक्ट डायरेक्टरी में यह कमांड चलाएं:

```bash
npx repomix
```

बस इतना ही! आपको एक `repomix-output.xml` फाइल मिलेगी जिसमें आपका पूरा रिपॉजिटरी AI-फ्रेंडली फॉर्मेट में होगा।

फिर आप इस फाइल को इस तरह के प्रॉम्प्ट के साथ एक AI असिस्टेंट को भेज सकते हैं:

```
इस फाइल में रिपॉजिटरी की सभी फाइलें एक में संयोजित हैं।
मैं कोड को रिफैक्टर करना चाहता हूं, इसलिए कृपया पहले इसकी समीक्षा करें।
```

AI आपके पूरे कोडबेस का विश्लेषण करेगा और व्यापक अंतर्दृष्टि प्रदान करेगा:

![Repomix File Usage 1](/images/docs/repomix-file-usage-1.png)

विशिष्ट परिवर्तनों पर चर्चा करते समय, AI कोड जनरेट करने में मदद कर सकता है। Claude के आर्टिफैक्ट्स जैसी सुविधाओं के साथ, आप कई परस्पर निर्भर फाइलें भी प्राप्त कर सकते हैं:

![Repomix File Usage 2](/images/docs/repomix-file-usage-2.png)

हैप्पी कोडिंग! 🚀

## मुख्य विशेषताएं

- **AI-अनुकूलित आउटपुट**: आपके कोडबेस को आसान AI प्रोसेसिंग के लिए फॉर्मेट करता है
- **टोकन काउंटिंग**: LLM कॉन्टेक्स्ट सीमाओं के लिए टोकन उपयोग को ट्रैक करता है
- **Git-जागरूक**: आपकी `.gitignore` और `.git/info/exclude` फाइलों का सम्मान करता है
- **सुरक्षा-केंद्रित**: संवेदनशील जानकारी का पता लगाता है
- **कई आउटपुट फॉर्मेट**: प्लेन टेक्स्ट, XML, या मार्कडाउन के बीच चुनें

## आगे क्या है?

- [इंस्टॉलेशन गाइड](installation.md): Repomix इंस्टॉल करने के विभिन्न तरीके
- [उपयोग गाइड](usage.md): बुनियादी और उन्नत सुविधाओं के बारे में जानें
- [कॉन्फिगरेशन](configuration.md): अपनी आवश्यकताओं के लिए Repomix को अनुकूलित करें
- [सुरक्षा सुविधाएं](security.md): सुरक्षा जांच के बारे में जानें

## समुदाय

हमारे [Discord समुदाय](https://discord.gg/wNYzTwZFku) में शामिल हों:
- Repomix के साथ मदद प्राप्त करना
- अपने अनुभव साझा करना
- नई सुविधाओं का सुझाव देना
- अन्य उपयोगकर्ताओं से जुड़ना

## सहायता

बग मिला या मदद चाहिए?
- [GitHub पर एक इश्यू खोलें](https://github.com/yamadashy/repomix/issues)
- हमारे Discord सर्वर में शामिल हों
- [दस्तावेज़ीकरण](https://repomix.com) देखें
