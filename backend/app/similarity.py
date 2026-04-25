async def find_similar_variants(normalized_variant: dict, annotations: dict) -> list[dict]:
    """Find and rank biologically similar known variants.

    Contributor task:
    - Gather known variant candidates from ClinVar, NCBI, research, etc.
    - Compute similarity scores based on the features of our variant in annotations
    and each of the known gathered variant candidates which should have descriptions of their
    respective 3D protein structures. (TBD exact metrics, could be a 
    weighted combination of multiple features)
    - Let Claude explain ranked candidates only after code selects them in above,
    don't let Claude guess. Return a list of the top 5-10 most similar variants with their scores and 
    descriptions from the papers and whatever.
    """
    return []
