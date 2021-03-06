﻿using System.Linq;

namespace Asin.AmazonService
{
    public class AmazonProvider
    {
        private readonly BackgroundEngine _backgroundEngine;
        private readonly InMemory _inMemory;

        public AmazonProvider(BackgroundEngine backgroundEngine, InMemory inMemory)
        {
            _backgroundEngine = backgroundEngine;
            _inMemory = inMemory;
        }

        public void AddAsin(string asinCode)
        {
            asinCode = asinCode.Trim();
            _backgroundEngine.AddAsin(asinCode);
        }

        public AsinServiceModel[] GetAsins()
        {
            return _inMemory.AasinDictionary.Select(p => p.Value).ToArray();
        }

        public ReviewServiceModel[] GetReviews()
        {
            return _inMemory.GetReviews();
        }

    }
}
