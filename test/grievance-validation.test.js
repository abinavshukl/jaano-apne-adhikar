const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');

function getValidateForm() {
  const html = `<!doctype html><html><body></body></html>`;
  const dom = new JSDOM(html, { url: 'http://localhost/' });
  const { window } = dom;

  global.window = window;
  global.document = window.document;
  global.navigator = window.navigator;

  const scriptText = fs.readFileSync(path.join(__dirname, '..', 'js', 'grievance.js'), 'utf8');

  // Expose validateForm to the global window object before IIFE closes
  const modifiedScript = scriptText.replace('})();', '  window.validateForm = validateForm;\n})();');

  window.eval(modifiedScript);
  return window.validateForm;
}

const validateForm = getValidateForm();

test('validateForm returns empty array for valid data', () => {
  const data = {
    name: 'राम कुमार',
    guardian: 'श्याम कुमार',
    phone: '9876543210',
    category: 'energy',
    description: 'यह एक बहुत लंबी समस्या का विवरण है जो बीस अक्षरों से अधिक है।'
  };
  const errors = validateForm(data);
  assert.deepEqual(errors, []);
});

test('validateForm requires complainant name', () => {
  const data = {
    name: '   ',
    guardian: 'श्याम कुमार',
    phone: '9876543210',
    category: 'energy',
    description: 'यह एक बहुत लंबी समस्या का विवरण है जो बीस अक्षरों से अधिक है।'
  };
  const errors = validateForm(data);
  assert.ok(errors.includes("शिकायतकर्ता का नाम अनिवार्य है।"));
});

test('validateForm requires guardian name', () => {
  const data = {
    name: 'राम कुमार',
    guardian: '',
    phone: '9876543210',
    category: 'energy',
    description: 'यह एक बहुत लंबी समस्या का विवरण है जो बीस अक्षरों से अधिक है।'
  };
  const errors = validateForm(data);
  assert.ok(errors.includes("पिता/पति का नाम अनिवार्य है।"));
});

test('validateForm requires valid 10-digit phone number', () => {
  const data = {
    name: 'राम कुमार',
    guardian: 'श्याम कुमार',
    phone: '1234567890', // Invalid start digit
    category: 'energy',
    description: 'यह एक बहुत लंबी समस्या का विवरण है जो बीस अक्षरों से अधिक है।'
  };
  const errors1 = validateForm(data);
  assert.ok(errors1.includes("वैध 10 अंकों का मोबाइल नंबर दर्ज करें।"));

  data.phone = '98765'; // Too short
  const errors2 = validateForm(data);
  assert.ok(errors2.includes("वैध 10 अंकों का मोबाइल नंबर दर्ज करें।"));
});

test('validateForm requires category selection', () => {
  const data = {
    name: 'राम कुमार',
    guardian: 'श्याम कुमार',
    phone: '9876543210',
    category: '',
    description: 'यह एक बहुत लंबी समस्या का विवरण है जो बीस अक्षरों से अधिक है।'
  };
  const errors = validateForm(data);
  assert.ok(errors.includes("शिकायत का विभाग चुनें।"));
});

test('validateForm requires description of at least 20 characters', () => {
  const data = {
    name: 'राम कुमार',
    guardian: 'श्याम कुमार',
    phone: '9876543210',
    category: 'energy',
    description: 'छोटा विवरण'
  };
  const errors = validateForm(data);
  assert.ok(errors.includes("समस्या विवरण कम से कम 20 अक्षरों में लिखें।"));
});
