Feature: Home Page test suite

    Background:
        Given the user visits "https://practicesoftwaretesting.com/"

    Scenario: Check the endpoint of Tool Shop page
        Given the user checks that the url contains de the endpoint "https://practicesoftwaretesting.com/"
        Then the user check that the url not contain the endpoint "/category"