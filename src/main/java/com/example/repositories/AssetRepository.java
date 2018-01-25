package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.entities.Asset;

public interface AssetRepository extends JpaRepository<Asset, Long> {
}
