package com.app.charts.UIControllers;

import java.io.FileReader;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class ChartsController {

	@RequestMapping(value = "/getChart", method = RequestMethod.GET, produces = "application/json")
	public JSONArray getChart() {
		JSONParser parser = new JSONParser();
		try {
			Object obj = parser.parse(new FileReader("/Users/schittimilla/Charts/src/main/resources/chartResponse.json"));
			return (JSONArray) obj;
		} catch (Exception e) {
			e.printStackTrace();
			return new JSONArray();
		}
	}
}