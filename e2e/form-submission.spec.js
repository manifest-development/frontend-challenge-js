import { test, expect } from '@playwright/test';

const testName = 'User A';
const testIncome = '40000';
const testEducation = 'High school or equivalent';

test('Demo page is loaded', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Form step 1
  console.log('Start form step 1');
  const nameInput = page.locator('#input-name');
  await expect(nameInput).toBeInViewport();
  await nameInput.fill(testName);

  const incomeInput = page.locator('#input-income');
  await expect(incomeInput).toBeInViewport();
  await incomeInput.fill(testIncome);

  const nextButton = page.locator('#form-step-1-next');
  await nextButton.click();

  console.log('Complete form step 1');
  // Form step 2
  console.log('Start form step 2');

  const educationInput = page.locator('#input-education');
  await expect(educationInput).toBeInViewport();
  await educationInput.selectOption(testEducation);

  const step2Button = page.locator('#form-step-2-next');
  await expect(step2Button).toBeInViewport();
  await step2Button.click();

  console.log('Compete form step 2');

  // Form step 3
  console.log('Start form confirmation page');
  const confirmationPage = page.locator('#confirmation-page');
  await expect(confirmationPage).toBeInViewport();

  const name = page.locator('#confirmation-name');
  await expect(name).toContainText(testName);

  const income = page.locator('#confirmation-income');
  await expect(income).toContainText(testIncome);

  const education = page.locator('#confirmation-education');
  await expect(education).toContainText(testEducation);

  const confirmButton = page.locator('#form-confirmation-button');
  await confirmButton.click();

  console.log('Complete form confirmation page');
  // ADD Form Thank you page test here
  console.log('Start for Thank you page');
  const thankYouPage = page.locator('#thankyou-page');
  await expect(thankYouPage).toBeInViewport();
  const NewForm = page.locator('#new-form-button');
  await NewForm.click();
  console.log('Complete Thank you page');
  // Back to form step 1 and form should be reset
  await page.waitForTimeout(3000);
  const form1Input = page.locator('#input-name');
  const nameInputValie = await form1Input.inputValue();
  await expect(form1Input).toBeInViewport();
  expect(nameInputValie).toBe('');
});
