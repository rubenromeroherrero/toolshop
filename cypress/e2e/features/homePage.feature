Feature: Home Page test suite

    Background:
        Given the user visits "https://practicesoftwaretesting.com/"

    Scenario: Check the endpoint of Tool Shop page
        Given the user checks that the url "eq" the endpoint "https://practicesoftwaretesting.com/"
        Then the user checks that the url "not.contain" the endpoint "/category"