package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.repositories.AssetRepository;
import com.example.entities.Asset;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class AssetController {
	@Autowired
	private AssetRepository assetRepository;
	
	@GetMapping("/assets")
	public List<Asset> getAssets(){
		return assetRepository.findAll();		
	}
	@GetMapping("/asset/{id}")
	public Asset getAsset(@PathVariable Long id){
		return assetRepository.findOne(id);		
	}
	@DeleteMapping("/asset/{id}")
	public boolean deleteAsset(@PathVariable Long id){
		assetRepository.delete(id);	
		return true;	
	}
	@PutMapping("/asset")
	public Asset updateAsset(@RequestBody Asset asset){
		return assetRepository.save(asset);		
	}
	@PostMapping("/asset")
	public Asset addAsset(@RequestBody Asset asset){
		return assetRepository.save(asset);		
	}
	
	
	

}
