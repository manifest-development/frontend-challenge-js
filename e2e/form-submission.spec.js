import { test, expect } from '@playwright/test';

const testName = 'User A';
const testIncome = '40000';
const testEducation = 'High school or equivalent';

// exercise3: dummpy profile image test
const testProfileImage = 'http://localhost:3000/assets/katie.png';

test('Demo page is loaded', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Form step 1
  console.log('Start form step 1');
  const nameInput = await page.locator('#input-name');
  await expect(nameInput).toBeInViewport();
  await nameInput.fill(testName);

  const incomeInput = await page.locator('#input-income');
  await expect(incomeInput).toBeInViewport();
  await incomeInput.fill(testIncome);

  const nextButton = await page.locator('#form-step-1-next');
  await nextButton.click();

  console.log('Complete form step 1');
  // Form step 2
  console.log('Start form step 2');

  const educationInput = await page.locator('#input-education');
  await expect(educationInput).toBeInViewport();
  await educationInput.selectOption(testEducation);

  const step2Button = await page.locator('#form-step-2-next');
  await expect(step2Button).toBeInViewport();
  await step2Button.click();

  console.log('Compete form step 2');

  // Form step 3
  console.log('Start form confirmation page');
  const confirmationPage = await page.locator('#confirmation-page');
  await expect(confirmationPage).toBeInViewport();

  const name = await page.locator('#confirmation-name');
  await expect(name).toContainText(testName);

  const income = await page.locator('#confirmation-income');
  await expect(income).toContainText(testIncome);

  const education = await page.locator('#confirmation-education');
  await expect(education).toContainText(testEducation);

  const confirmButton = await page.locator('#form-confirmation-button');
  await confirmButton.click();

  console.log('Complete form confirmation page');
  // ADD Form Thank you page test here

  // exercise3:
  console.log('Start Thank you page');
  await page.waitForTimeout(3000);
  const thankyouPage = await page.locator('#thankyou-page');
  await expect(thankyouPage).toBeInViewport();

  //test the thank you message text
  const message = await page.locator('#thankyou-message');
  await expect(message).toContainText(testName);

  // If the image is dymamic: test the avatar image(depends on the way to store and manage the image in the database, the test may be different. 
  // Here I use the src attribute to test the image url.)
  // const avatarSrc = await page.locator('#avatar').getAttribute('src');
  // expect(avatarSrc).toBe(testProfileImage);

  //test the submit another button
  const newFormButtom = await page.locator('#submit-another-button');
  await newFormButtom.click();

  console.log('Complete Thank you page');

  // Back to form step 1 and form should be reset
  const form1Input = await page.locator('#input-name');
  const nameInputValie = await form1Input.inputValue();
  await expect(form1Input).toBeInViewport();
  await expect(nameInputValie).toBe('');
});
